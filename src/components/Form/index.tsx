import { useState } from 'react';
import BaseButton from '../ui/buttons/BaseButton';
import BaseLink from '../ui/links/BaseLink';
import { IFormProps } from './Form';

export default function Form(props: IFormProps) {
	function handleSubmit(e: any) {
		e.preventDefault();
		props.onSubmit(e);
	}
	return <form onSubmit={handleSubmit}>{props.children}</form>;
}
