import { HTMLAttributes } from 'react';
import type { ReactElement } from 'react';
export declare type ListProps = {
    className?: string;
    rowHeight?: number;
    rowCount: number;
    rowRenderer: (index: number, style: {
        [key: string]: string;
    }) => ReactElement;
} & HTMLAttributes<HTMLUListElement>;
declare const List: import("react").ForwardRefExoticComponent<{
    className?: string;
    rowHeight?: number;
    rowCount: number;
    rowRenderer: (index: number, style: {
        [key: string]: string;
    }) => ReactElement;
} & HTMLAttributes<HTMLUListElement> & import("react").RefAttributes<HTMLUListElement>>;
export default List;
