/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import { getMetadata } from '../scripts/aem.js';

export function loadFavicon() {
  const name = getMetadata('favicon') || 'favicon';
  const favBase = `./img/favicons/${name}`;

  const favicon = document.head.querySelector('link[rel="icon"]');
  const tags = `<link rel="apple-touch-icon" href="${favBase}-180.png">
                  <link rel="manifest" href="${favBase}.webmanifest">`;
  favicon.insertAdjacentHTML('afterend', tags);
  favicon.href = `${favBase}.ico`;
}

export function test() {

}
