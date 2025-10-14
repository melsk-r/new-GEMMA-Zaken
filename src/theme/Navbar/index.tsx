/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';
import NavbarLayout from '@theme/Navbar/Layout';
import NavbarContent from '@theme/Navbar/Content';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './extraNavbar.module.css'; // optioneel voor styling

export default function Navbar(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const secondaryItems = siteConfig.customFields?.secondaryNavbarItems ?? [];

  return (
    <>
		{/* Originele navigatie */}
		<NavbarLayout>
		  <NavbarContent />
		</NavbarLayout>

		{/* Extra regel boven de navigatie */}
		<div className={styles.extraNavbar}>
          {secondaryItems.map((item, index) => (
            <Link key={index} to={item.to} style={{ marginRight: '1rem' }}>
              {item.label}
            </Link>
          ))}
		</div>
    </>
  );
}