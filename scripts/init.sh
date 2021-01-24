#!/bin/sh

# https://stackoverflow.com/a/246128
cd "$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

chmod +x ./copySite.sh
chmod +x ./buildLocal.sh
chmod +x ./serveLocal.sh
