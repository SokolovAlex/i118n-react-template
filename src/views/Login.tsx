import React from "react";
import Helmet from "react-helmet";
import { Page } from "../components/Page/Page";
import { Input } from '@fcc/rbo-ui/dist/Input';
import { FormField } from '@fcc/rbo-ui/dist/FormField';

export default () => (
    <Page>
        <Helmet title="Login" />
        <h1>This is the <strong>Login</strong> view.</h1>
        <FormField>
            <FormField.Label>Название поля</FormField.Label>
            <FormField.Content>
                <Input placeholder='Сообщение'/>
                <FormField.Message>Сообщение</FormField.Message>
            </FormField.Content>
        </FormField>
        <FormField>
            <FormField.Label>Название поля</FormField.Label>
            <FormField.Content>
                <Input />
                <FormField.Message>Сообщение</FormField.Message>
            </FormField.Content>
        </FormField>
    </Page>
);