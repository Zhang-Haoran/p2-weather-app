import React from 'react'
import { SearchBarProps } from '../../../types'
import Form from '../../shared/Form/Form'
import Input from '../../shared/Input/Input'
// 参数从父组件传入
const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, submit }) => {
  return (
    <Form onSubmit={submit} className="flex justify-start pl-8">
      <div className="bg-white rounded-lg">
        <Input
          type="text"
          placeholder="Search for a city"
          value={value}
          onChange={onChange}
          className="pl-6 pr-12"
        />
        <button
          type="submit"
          className="bg-violet-500 rounded-md text-white px-4 py-2"
        >
          Search
        </button>
      </div>
    </Form>
  )
}
export default SearchBar
