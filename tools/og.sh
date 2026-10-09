#!/bin/sh
# Renders the link previews with headless Chrome: public/og-<lang>.png, one per language of the site.
set -e
cd "$(dirname "$0")"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
for lang in en it de fr es; do
  out=../public/og-$lang.png
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
    --window-size=1200,630 --virtual-time-budget=4000 \
    --screenshot="$out" "file://$PWD/og.html?$lang" >/dev/null 2>&1
  echo "$out"
done
