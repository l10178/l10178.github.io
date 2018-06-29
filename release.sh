#!/bin/bash
current_dir=$(cd `dirname $0`;pwd)
cd $current_dir
rm -rf grape-skins
cd ../grapes
git pull
cp -rf grape-skins $current_dir/
cd $current_dir
git add . && git commit -a -m "release new ui" && git push origin source
