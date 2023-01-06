import { Center, CenterProps } from "@chakra-ui/react";
export default function AuthLayout(props: CenterProps): JSX.Element {
	return <Center {...props}>{props.children}</Center>;
}
