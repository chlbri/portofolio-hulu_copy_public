/** @format */

import { MouseEvent as ReactMouseEvent, RefObject } from 'react';

export default function isDivContainsMouse(
  ref: RefObject<HTMLDivElement>,
  event: ReactMouseEvent<HTMLDivElement, MouseEvent>,
) {
  return ref.current?.contains(event.currentTarget);
}