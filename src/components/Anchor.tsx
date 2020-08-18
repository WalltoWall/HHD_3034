import React from 'react'
import clsx from 'clsx'
import { useBoxStyles, usePseudoBoxStyles } from '@walltowall/calico'

import { Link, LinkProps } from './Link'

export type AnchorProps = LinkProps

export const Anchor = ({ className, ...props }: AnchorProps) => {
  const classNames = clsx(
    useBoxStyles({ color: 'red40' }),
    usePseudoBoxStyles({ textDecoration: 'underline' }, 'hover'),
    usePseudoBoxStyles({ textDecoration: 'underline' }, 'focus'),
    className,
  )

  return <Link className={classNames} {...props} />
}
