#!/bin/zsh
set -euo pipefail
request="${*:-今日のメモ}"
case "$request" in
  *今月*|*月間*) mode=month;;
  *今日*|*本日*|*日記*|*メモ*) mode=today;;
  *目標*) mode=goals;;
  *アウトプット*|*成果物*) mode=outputs;;
  *タスク*|*やること*) mode=tasks;;
  *) mode="$request";;
esac
print "[obsidian-quick-search] $request -> $mode"
exec "${0:A:h}/quick-search.sh" "$mode"
