import { ReactComponent as Logo } from './svg/logo.svg';
import { sizes } from '../../constants';

export enum IconTypes {
    logo,
}

interface SVGInfo {
    component: any;
    fill?: string;
    width?: string;
    color?: string;
    height?: string;
}

export const svgMapping: { [key: string]: SVGInfo } = {
    [IconTypes.logo]: {
        component: Logo,
        width: sizes.iconSizeXs,
        height: sizes.iconSizeXs,
    },
};