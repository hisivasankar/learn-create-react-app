#!/bin/bash


function getRemoteURL {
    token=$1
    domain=$2

    #domain pattern: https://username@github.com/user/repo.git
    gen_cmd=$(echo $domain | sed "s/\/\//\/\/$token@/")
    echo $gen_cmd
}

result=$(getRemoteURL $1 $2)

echo $result
