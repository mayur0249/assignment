import { Link } from "react-router-dom"
import styled from "styled-components"
import Web3 from 'web3'
import { CellProps } from "react-table"
import { Table } from "../../shared/table/table"
import { homePath } from "../../logic/paths"

const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545")

const DashboardWrap = styled.div<any>`
    display: grid;
    height: 100vh;
    place-items: center;
    color: white;

    span {
        margin: 10px 0;
        display: inline-block;
        width: 100%;
        text-align: center;
    }
`

const StyledLink = styled<any>(Link)`
    padding: 20px;
    background: white;
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Dashboard: React.FC = () => {
    console.log('web3 object: ', web3);

    const tableData = [
        { index: 0, name: 'xyz' },
        { index: 1, name: 'abc' },
        { index: 2, name: '123' },
    ]

    const columns = [
        {
            Header: 'Index',
            accessor: 'index',
            Cell: ({ row }: CellProps<any>) => {
                return (
                    <span>
                        {row.original.index}
                    </span>
                )
            },
        },
        {
            Header: 'Name',
            accessor: 'name',
            Cell: ({ row }: CellProps<any>) => {
                return (
                    <span>{row.original.name}</span>
                )
            },
            className: 'left'
        },
    ]

    return <DashboardWrap>
        <div>
            <span>Example Navigation </span>
            <StyledLink to={homePath}>Home</StyledLink>
        </div>
        <span>Example Table</span>
        <Table columns={columns} data={tableData} scrollingTable={true} withAllBorders={true} noFooter={true} />
    </DashboardWrap>
}