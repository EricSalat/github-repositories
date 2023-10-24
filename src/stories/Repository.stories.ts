import type { Meta, StoryObj } from '@storybook/react';

import { Repository } from '../components/Repository/Repository.tsx';
import "../index.css";
import 'bootstrap/dist/css/bootstrap.css';
import "../components/Repository/Repository.css";

const meta = {
    title: "Components/Repository",
    component: Repository,
    parameters: {
        layout: "centered",
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Repository>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All_Data: Story = {
    args: {
        repository: {
            id: 1,
            name: 'My repository',
            visibility: 'public',
            description: 'Here you can find the repository description',
            updated_at: new Date().toISOString(),
            language: 'JavaScript',
            html_url: 'https://github.com/mi-repositorio',
        }     
    }
}

export const Without_Description: Story = {
    args: {
        repository: {
            id: 1,
            name: 'My repository',
            visibility: 'public',
            description: null,
            updated_at: new Date().toISOString(),
            language: 'JavaScript',
            html_url: 'https://github.com/mi-repositorio',
        }     
    }
}

export const Without_Language: Story = {
    args: {
        repository: {
            id: 1,
            name: 'My repository',
            visibility: 'public',
            description: 'Here you can find the repository description',
            updated_at: new Date().toISOString(),
            language: null,
            html_url: 'https://github.com/mi-repositorio',
        }     
    }
}

