import MessageDisplay from '@/components/MessageDisplay'
import { mount } from '@vue/test-utils'
import { getMessage } from '@/services/axios'
import { flushPromises } from 'flush-promises'

jest.mock('@/services/axios')
beforeEach(() => {
  jest.clearAllMocks()
})

describe('MessageDisplay', () => {
  it('Calls getMessage and display message', async () => {
    // mock the API call
    const mockMessage = 'Hello from the db'
    getMessage.mockResolvedValueOnce({ text: mockMessage }) // calling mocked get request

    const wrapper = mount(MessageDisplay)

    // wait for promise to resolve
    await flushPromises()

    // check that call happened once
    expect(getMessage).toHaveBeenCalledTimes(1) // check that call happened once

    // check that component displays message
    const message = wrapper.find('[data-testid="message"]').element.textContent
    expect(message).toEqual(mockMessage)
  })

  it('Displays an error when getMessage call fails', async () => {
    // mock the failed API call
    const mockError = 'Oops! something went wrong.'
    getMessage.mockRejectedValueOnce(mockError)

    const wrapper = mount(MessageDisplay)
    // wait for promise to resolve
    await flushPromises()

    // check that call happend once
    expect(getMessage).toHaveBeenCalledTimes(1)

    // check that component displays error
    const displayedError = wrapper.find('[data-testid="message-error"]').element
      .textContent
    expect(displayedError).toEqual(mockError)
  })
})
