#!/bin/zsh
set -euo pipefail

VAULT="/Users/kose/Documents/ChatGPT/Obsidian タスク管理/sakamoti55"
DATE="$(date +%F)"
while [[ $# -gt 0 ]]; do
  case "$1" in
    --date) DATE="$2"; shift 2;;
    *) MODE="$1"; shift;;
  esac
done
MODE="${MODE:-today}"
YEAR="${DATE[1,4]}"; MONTH="${DATE[6,7]}"
DAILY="$VAULT/01_Daily/$YEAR/$MONTH"
case "$MODE" in
  today) files=("$DAILY/$DATE.md") ;;
  month) files=("$VAULT/00_HOME/TASKS.md" "$DAILY"/*.md) ;;
  tasks) files=("$VAULT/00_HOME/TASKS.md") ;;
  goals) files=("$VAULT/03_Goals/GOALS.md" "$VAULT/03_Goals/Monthly/$YEAR/$DATE[1,7].md") ;;
  outputs) files=("$VAULT/02_Outputs/README.md" "$VAULT/02_Outputs/Monthly/$YEAR/$DATE[1,7].md") ;;
  *) files=($(find "$VAULT" -type f -name '*.md' -print0 | xargs -0 rg -l -- "$MODE" 2>/dev/null || true)) ;;
esac
if [[ "$MODE" == month ]]; then
  print "===== 月間タスク: ${YEAR}-${MONTH} ====="
  print "\n--- 00_HOME/TASKS.md ---"
  rg -n '^\s*- \[[ xX]\]' "$VAULT/00_HOME/TASKS.md" || true
  for file in "$DAILY"/"$YEAR-$MONTH"-*.md; do
    [[ -f "$file" ]] || continue
    matches="$(rg -n '^\s*- \[[ xX]\]' "$file" || true)"
    [[ -n "$matches" ]] && { print "\n--- ${file#$VAULT/} ---"; print "$matches"; }
  done
  exit 0
fi
for file in $files; do [[ -f "$file" ]] && { print "\n===== ${file#$VAULT/} ====="; sed -n '1,240p' "$file"; }; done
