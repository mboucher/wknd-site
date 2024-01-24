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

import { createTag } from '../../utils/utils.js';

export default async function decorate(block) {
  const container = block.querySelector('div > div:nth-child(2)');
  const formContainer = createTag('form');
  const input = createTag('input', { class: 'email', placeholder: 'YOUR EMAIL ADDRESS' });
  const submit = createTag('input', { class: 'submit', type: 'button', value: 'Sign up' });
  formContainer.append(input);
  formContainer.append(submit);
  container.append(formContainer);
}
