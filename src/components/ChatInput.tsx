import { TextArea } from '@blueprintjs/core'
import * as React from 'react'
import styled from 'styled-components'

import { color } from 'Utils/styled'

/**
 * Wrapper component.
 */
const Wrapper = styled.div`
  background-color: ${color('chatInput.background')};
  border-top: 1px solid ${color('chatInput.border')};
  padding: 10px;
`

/**
 * Input component.
 */
const Input = styled(TextArea)`
  outline: none;
  resize: none;
`

/**
 * ChatInput Component.
 */
export default class ChatInput extends React.Component<Props> {
  /**
   * Renders the component.
   * @return Element to render.
   */
  public render() {
    const { disabled, value } = this.props

    return (
      <Wrapper>
        <Input
          value={value}
          onChange={this.onChangeInputValue}
          onKeyDown={this.onKeyDownInputValue}
          disabled={disabled}
          large
          fill
        />
      </Wrapper>
    )
  }

  /**
   * Triggered when a key is pressed down in the input.
   * We use this event to detect when the 'Enter' key is pressed.
   */
  private onKeyDownInputValue = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()

      this.props.onSubmit()
    }
  }

  /**
   * Triggered when the input is modified.
   * @param event - The associated event.
   */
  private onChangeInputValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.props.onChange(event.target.value)
  }
}

/**
 * React Props.
 */
type Props = {
  disabled: boolean
  onChange: (value: string) => void
  onSubmit: () => void
  value: string
}
