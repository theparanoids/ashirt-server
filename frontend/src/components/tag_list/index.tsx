// Copyright 2020, Verizon Media
// Licensed under the terms of the MIT. See LICENSE file in project root for terms.

import * as React from 'react'
import Tag from 'src/components/tag'
import classnames from 'classnames/bind'
import {Tag as TagType} from 'src/global_types'
const cx = classnames.bind(require('./stylesheet'))

export default (props: {
  tags: Array<TagType>,
  onTagClick?: (t: TagType) => void,
}) => (
  <div className={cx('root')}>
    {props.tags.map(tag => (
      <Tag
        key={tag.id}
        name={tag.name}
        onClick={props.onTagClick ? props.onTagClick.bind(null, tag) : null}
        color={tag.colorName}
      />
    ))}
  </div>
)
