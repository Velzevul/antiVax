#!/bin/bash

echo -n "Component's domain: "
read componentDomain

echo -n "Component's name: "
read componentName

mkdir -p "./src/$componentDomain/$componentName"

echo "{
  \"name\": \"$componentName\",
  \"main\": \"$componentName.jsx\"
}" >> "./src/$componentDomain/$componentName/package.json"

echo ".$componentName {
}" >> "./src/$componentDomain/$componentName/$componentName.css"

echo "import React from 'react';

import styles from './$componentName.css';
import layouts from '../../layouts.css';

const $componentName = () => {
  return (
    <div className={styles.$componentName}>

    </div>
  );
};

export default $componentName;
" >> "./src/$componentDomain/$componentName/$componentName.jsx"

echo "created component $componentName in $componentDomain"

exit 0
