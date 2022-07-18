import * as React from 'react'
import styled from 'styled-components'
import { ComponentType, ReactComponentElement } from 'react'
import { rgba } from 'polished'
import { matchesPath } from '../helpers/util'
import { homePath } from '../../logic/paths'
import { FlexRow } from '../../styles/styled'

export interface HeaderLinks {
    path?: string
    defaultUrl?: string
    title: string
    image: ReactComponentElement<any>
}

const FixedHeader = styled.div<any>`
  z-index: 999;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  top: 0;
  background: white;
`

const LeftVerticalDivider = styled.div<any>`
  height: 24px;
  width: 1px;
  background: ${rgba(206, 218, 225, 0.3)};
  margin: ${props => props.styleChange === 'true' ? '0 16px' : '0 24px'};
`

const RightVerticalDivider = styled.div<any>`
  height: 24px;
  width: 1px;
  background: ${rgba(206, 218, 225, 0.3)};
  margin: ${props => props.styleChange === 'true' ?
        props.withMargin === 'false' ? '0 8px' : '0 70px 0 8px'
        : props.withMargin === 'false' ? '0 24px' : '0 80px 0 24px'};
`

export const Header = (props: any) => {
    const styleChange = window.innerWidth < 1290

    const userExists = true

    const matchUrls = (urls: string[]) => {
        let value: boolean = false
        urls.forEach(url => {
            const matched = matchesPath(url, window.location.pathname, true)
            if (matched) value = true
        })
        return value
    }
    const noHeader = matchUrls([homePath])

    return userExists && !noHeader ? (
        <FixedHeader showBorder={!noHeader}>
            <FlexRow>
                New Header with HOC
            </FlexRow>
            <FlexRow>
                <RightVerticalDivider
                    withMargin={'true'}
                    styleChange={styleChange ? 'true' : 'false'} />
            </FlexRow>
        </FixedHeader>
    ) : null
}

export function withHeader<P>(InnerComponent: ComponentType<P>): ComponentType<P> {
    return (props: any) => (
        <React.Fragment>
            <Header {...props} />
            <InnerComponent {...props} />
        </React.Fragment>
    )
}