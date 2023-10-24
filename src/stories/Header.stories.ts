import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../components/Header/Header';
import "../index.css";
import 'bootstrap/dist/css/bootstrap.css';
import "../components/Header/Header.css";

const meta = {
    title: "Components/Header",
    component: Header,
    parameters: {
        layout: "centered",
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const State1: Story = {
   args: {
    repositoriesAmount: 30,
    username: "Evan You"
   }
}