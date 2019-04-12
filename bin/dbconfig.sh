#!/bin/bash

echo "configuring codegig db"

sudo -u postgres dropdb codegig
sudo -u postgres createdb codegig --owner=cg_user

declare -a sqlArr
for file in ./data/sql/*
do
	sqlArr=("${sqlArr[@]}" "$file")
	if [ "${sqlArr[0]}" == "./data/sql/*" ]; then
		echo "no files in this directory"
	else
		sudo PGPASSWORD=$CG_PW -u postgres psql -h localhost -d codegig -U cg_user < $file
	fi
done

echo "codegig db configured"
