import React, { Fragment } from 'react'
import { Input, Button, List } from 'antd'
import { getInputValue, getAddItem, getDelete } from './store/actionCreator'
import { connect } from 'react-redux'
const TodoList = (props) => {
    const { inputValue, handleChange, handleBtn, list, handleDelete } = props

    return (
        <Fragment>
            <div style={{ margin: '11px 15px' }}>
                <Input placeholder="请输入" style={{ width: '300px' }} value={inputValue} onChange={handleChange} />
                <Button type="primary" onClick={handleBtn} style={{ marginLeft: '15px' }}>提交</Button>
            </div>
            <div style={{ margin: '11px 15px', width: '300px' }}>
                <List
                    bordered
                    dataSource={list}
                    renderItem={(item, index) => (<List.Item onClick={() => { handleDelete(index) }}>{item}</List.Item>)}
                />
            </div>
        </Fragment>
    )

}
// 定义一个规则,state是store里面的数据，通过mapStatetoProps映射到组件中去,用props来接收
const mapStatetoProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleChange(e) {
            const action = getInputValue(e.target.value)
            dispatch(action)
        },
        handleBtn() {
            const action = getAddItem()
            dispatch(action)
        },
        handleDelete(index) {
            const action = getDelete()
            dispatch(action)
        }
    }
}
export default connect(mapStatetoProps, mapDispatchToProps)(TodoList);