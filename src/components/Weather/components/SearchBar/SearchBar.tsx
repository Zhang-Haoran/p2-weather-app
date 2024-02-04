import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Form, Icon, Input } from './style'
import { SearchBarProps } from '../../../../types'
// 参数从父组件传入
const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, submit }) => {
  return (
    <Form onSubmit={submit}>
      <Icon>
        <SearchOutlined />
      </Icon>
      <Input
        type="text"
        placeholder="Search for a city"
        value={value}
        onChange={onChange}
      />
    </Form>
  )
}
export default SearchBar
