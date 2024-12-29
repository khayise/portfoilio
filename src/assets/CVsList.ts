export interface ICV {
	language: string;
	href: string;
	disabled: boolean;
}

export const CVsList: ICV[] = [
	{
		language: 'EN',
		href: '',
		disabled: true,
	},
	{
		language: 'DE',
		href: '',
		disabled: true,
	},
	{
		language: 'RUS',
		href: 'https://www.dropbox.com/scl/fi/dcuce2j3hpzmzfnchrvry/Andrii-Dedesh-CV-RUS.pdf?rlkey=n77u6msko3vaa233yqquvkqzw&st=tdvf1mdm&dl=1',
		disabled: false,
	},
	{
		language: 'UKR',
		href: 'https://www.dropbox.com/scl/fi/k1vi4wtf7o8g813tbl5xt/Andrii-Dedesh-CV-UKR.pdf?rlkey=v63loeqklzofo1q55kax6cm0m&st=i2twhvvt&dl=1',
		disabled: false,
	},
];
