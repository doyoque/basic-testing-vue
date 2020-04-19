import LoginForm from '@/components/LoginForm.vue'
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
  it('emits an event with a user data payload', () => {
    const wrapper = mount(LoginForm)

    // 1. Find text input
    const input = wrapper.find('input[type="text"]') // Find text input

    // 2. Set value for text input
    input.setValue('Doyoque One') // Set value for text input

    // 3. Simulate form submission
    wrapper.trigger('submit')

    // 4. Assert event has been emitted
    const formSubmittedCalls = wrapper.emitted('formSubmitted')
    expect(formSubmittedCalls).toHaveLength(1)

    // 5. Assert payload is correct
    const expectedPayload = { name: 'Doyoque One' }
    expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(
      expectedPayload
    )
  })
})
