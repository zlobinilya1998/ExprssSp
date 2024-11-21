import { mount } from "@vue/test-utils";
import Customer, { IProps } from "../Customer.vue";
import { expect, it } from "vitest";

const props: IProps = {
    item: {
        email: 'test@gmail.com',
        id: 25,
        name: 'Test',
        phone: '89175397780',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    }
}

const wrapper = mount(Customer, { props });

it("display name", async () => {
    const name = wrapper.get('[data-testid=name]').text();
    expect(name).toBe(props.item.name)
});
it("display phone", async () => {
    const name = wrapper.get('[data-testid=phone]').text();
    expect(name).toBe(props.item.phone)
});
it("display email", async () => {
    const name = wrapper.get('[data-testid=email]').text();
    expect(name).toBe(props.item.email)
});