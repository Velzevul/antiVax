#!/bin/bash

echo -n "Component name: "
read componentName

mkdir -p "./app/components/$componentName"

echo "{
  \"name\": \"$componentName\",
  \"main\": \"$componentName.jsx\"
}" >> "./app/components/$componentName/package.json"

echo ".$componentName {
}" >> "./app/components/$componentName/$componentName.css"

echo "import React from 'react';

import styles from './$componentName.css';
import layouts from '../../styles/layouts.css';

const $componentName = () => {
  return (
    <div className={styles.$componentName}>

    </div>
  );
};

export default $componentName;
" >> "./app/components/$componentName/$componentName.jsx"

echo "created component $componentName"

exit 0
