---
sidebar_position: 3
---

## 基本方法

| 前缀    |  方法                                               ||
| ------: | --------------------------------------------------- |---|
| `imp→`  | `import moduleName from 'module'`                   |快捷 引入组件|
| `imn→`  | `import 'module'`                                   |快捷 引入CSS|
| `imd→`  | `import { destructuredModule } from 'module'`       ||
| `ime→`  | `import * as alias from 'module'`                   ||
| `ima→`  | `import { originalName as aliasName} from 'module'` ||
| `exp→`  | `export default moduleName`                         |快捷 默认导出的组件|
| `cp→`   | `const { } = this.props`                            ||
| `cs→`   | `const { } = this.state`                            ||
| `redux→`    | `import { connect } from 'react-redux'`         |快捷 导入路由库组件|


## React

| 前缀         | 方法                                                                              |
| ----------: | ----------------------------------------------------------------------------------- |
| `imr→`      | `import React from 'react'`                                                         |
| `imrd→`     | `import ReactDOM from 'react-dom'`                                                  |
| `imrc→`     | `import React, { Component } from 'react'`                                          |
| `imrcp→`    | `import React, { Component } from 'react' & import PropTypes from 'prop-types'`     |
| `imrpc→`    | `import React, { PureComponent } from 'react'`                                      |
| `imrpcp→`   | `import React, { PureComponent } from 'react' & import PropTypes from 'prop-types'` |
| `imrm→`     | `import React, { memo } from 'react'`                                               |
| `imrmp→`    | `import React, { memo } from 'react' & import PropTypes from 'prop-types'`          |
| `impt→`     | `import PropTypes from 'prop-types'`                                                |
| `redux→`    | `import { connect } from 'react-redux'`                                             |
| `est→`      | `this.state = { }`                                                                  |
| `cwm→`      | `componentWillMount = () => { }` DEPRECATED!!!                                      |
| `cdm→`      | `componentDidMount = () => { }`                                                     |
| `cwr→`      | `componentWillReceiveProps = (nextProps) => { }` DEPRECATED!!!                      |

| `sst→`      | `this.setState({ })`                                                                |
| `ssf→`      | `this.setState((state, props) => return { })`                                       |
| `props→`    | `this.props.propName`                                                               |
| `state→`    | `this.state.stateName`                                                              |
| `rcontext→` | `const ${1:contextName} = React.createContext()`                                    |
| `cref→`     | `this.${1:refName}Ref = React.createRef()`                                          |


## React 组件

### `rcc`

```javascript
import React, { Component } from 'react'

export default class FileName extends Component {
  render() {
    return <div>$2</div>
  }
}
```

### `rce`

```javascript
import React, { Component } from 'react'

export class FileName extends Component {
  render() {
    return <div>$2</div>
  }
}

export default $1
```

### `rcep`

```javascript
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class FileName extends Component {
  static propTypes = {}

  render() {
    return <div>$2</div>
  }
}

export default $1
```

### `rpc`

```javascript
import React, { PureComponent } from 'react'

export default class FileName extends PureComponent {
  render() {
    return <div>$2</div>
  }
}
```

### `rpcp`

```javascript
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class FileName extends PureComponent {
  static propTypes = {}

  render() {
    return <div>$2</div>
  }
}
```
### `rpce`

```javascript
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class FileName extends PureComponent {
  static propTypes = {}

  render() {
    return <div>$2</div>
  }
}

export default FileName
```

### `rccp`

```javascript
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FileName extends Component {
  static propTypes = {
    $2: $3,
  }

  render() {
    return <div>$4</div>
  }
}
```

### `rfcp`

```javascript
import React from 'react'
import PropTypes from 'prop-types'

function $1(props) {
  return <div>$0</div>
}

$1.propTypes = {}

export default $1
```

### `rfc`

```javascript
import React from 'react'

export default function $1() {
  return <div>$0</div>
}
```

### `rfce`

```javascript
import React from 'react'

function $1() {
  return <div>$0</div>
}

export default $1
```

### `rafcp`

```javascript
import React from 'react'
import PropTypes from 'prop-types'

const $1 = props => {
  return <div>$0</div>
}

$1.propTypes = {}

export default $1
```
### `rafc`

```javascript
import React from 'react'

const $1 = () => {
  return <div>$0</div>
}

export default $1
```

### `rafce`

```javascript
import React from 'react'

const $1 = () => {
  return <div>$0</div>
}

export default $1
```

### `rmc`

```javascript
import React, { memo } from 'react'

export default memo(function $1() {
  return <div>$0</div>
})
```

### `rmcp`

```javascript
import React, { memo } from 'react'
import PropTypes from 'prop-types'

const $1 = memo(function $1(props) {
  return <div>$0</div>
})

$1.propTypes = {}

export default $1
```


