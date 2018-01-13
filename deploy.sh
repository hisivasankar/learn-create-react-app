#!/bin/bash
#git config --global http.sslverify "false"


#domain pattern: https://username@github.com/user/repo.git
function getRemoteURL {
    token=$1
    domain=$2
    gen_cmd=$(echo $domain | sed "s/\/\//\/\/$token@/")
    echo $gen_cmd
}

function getTempName {
    tempFolderName=$(date +"%s")
    echo $tempFolderName;
}

function createTempFolder {
    name=$1
    folder="/tmp/$name" 
    mkdir folder
    echo folder
}

function copyToTempDir {
    source=$1
    target=$2
    echo "Source: /$source Target: /tmp/$target"
    cp -v -r ./$source/* /tmp/$target/
}

function makeCommit {
    target=$1
    echo "Moving to: $target"
    cd $target
    git init
    git checkout --orphan gh-pages
    git add .
    git commit -m "Added by deploy script"
}

function pushCommit {
    echo "Pushing commit @ $(pwd)"
    remote=$1
    branch=$2
    echo "git push $remote HEAD:$branch"
    git push $remote HEAD:$branch
}

gt_token=1eab1c8131b766858311125b71636c994bc8ab4d
folderName=$1
target_branch=$2
domain=$3
token=$4
curr=$(pwd)

echo $gen_cmd

# tempFolder=$(getTempName)
remoteURL=$(getRemoteURL $token $domain)
tempFolderName=$(getTempName)

# Creating temp folder for making commit
createTempFolder $tempFolderName
copyToTempDir $folderName $tempFolderName
makeCommit $tempFolderName
push $remoteURL $target_branch

echo "Remote URL: $remoteURL"
echo "Temp FolderName: $tempFolderName"

echo "Deleting folder: /tmp/$tempFolderName"
rm -rf /tmp/$tempFolderName




