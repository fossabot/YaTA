import { IconName } from '@blueprintjs/core'

import { ActionType } from 'Libs/Action'

/**
 * Action icons mapping.
 */
export default {
  [ActionType.Open]: 'document-open',
  [ActionType.Prepare]: 'form',
  [ActionType.Say]: 'chat',
  [ActionType.Whisper]: 'envelope',
} as Record<ActionType, IconName>
