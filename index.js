import React from 'react'
import {render} from 'react-dom'

import Routers from './src/routers.js'
  

  if (module.hot) {
    module.hot.dispose(function () {
      // 模块即将被替换时
      console.log('文件修改：')
    });
  
    module.hot.accept(function () {
      // 模块或其依赖项之一刚刚更新时
      render(
        <Routers/>,
        document.getElementById('root')
      );
    });
  }

  render(
    <Routers/>,
    document.getElementById('root')
  );