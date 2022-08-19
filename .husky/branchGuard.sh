#!/bin/sh

branchName=$(git branch | grep '*' | sed 's/* //')
forbiddenBranches="main otherBranch"

for forbiddenBranch in ${forbiddenBranches};
do
    if [ "$forbiddenBranch" = "$branchName" ]
    then
        errorColor='\033[0;31m'
        clearColor='\033[0m'
        echo "${errorColor}ERROR: Commiting directly to ${branchName} branch is not allowed! Please create a feature branch and open a PR.${clearColor}" && exit 1
    fi
done
