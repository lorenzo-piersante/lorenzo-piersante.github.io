#!/usr/bin/env bash

set -e

if [ -n "$(git status --porcelain)" ]; then
    echo "Working directory is dirty. Commit or stash changes first."
    exit 1
fi

ITERATIONS=${1:-10}
BRANCH="overnight-batch-$(date +%Y%m%d-%H%M%S)"

git checkout main
git pull origin main
git checkout -b "$BRANCH"

echo "Working on branch: $BRANCH"

for ((i=1; i<=ITERATIONS; i++)); do
    echo "=== Iteration $i of $ITERATIONS ==="

    opencode run --auto -m opencode/deepseek-v4.1-flash-free "$(cat <<'EOF'
1. Use the github-issues skill to fetch all open issues from this repository.
2. Run `git log main..HEAD --oneline` to see which issues were already handled on this branch. Commits use the format `ISSUE #<number>: <description>`.
3. Filter out every issue whose number already appears in that log.
4. If no issues remain after filtering, create `.nightwatch-complete` and exit.
5. From the remaining issues, choose ONE that seems most appropriate to work on next. You must ONLY CHOOSE ONE.
6. Implement the fix or feature for that issue.
7. Commit with message format: `ISSUE #<issue-number>: <short-description>` and in the body mark that it closes the related issue on GitHub.
EOF
)"

    git push -u origin "$BRANCH"

    # Check for completion
    if [ -f .nightwatch-complete ]; then
        echo "All issues complete after $i iterations."
        rm -f .nightwatch-complete
        echo "Review with: git log main..$BRANCH"
        exit 0
    fi
done

echo "Reached max iterations ($ITERATIONS). Review with: git log main..$BRANCH"
