#!/bin/bash
current_dir=$(cd `dirname $0`;pwd)
cd $current_dir
git pull
rm -rf static index.html
cd grape-skins
yarn build
cp -rf $current_dir/grape-skins/target/dist/* $current_dir/
cd $current_dir
git add . && git commit -a -m "release new ui" && git push
