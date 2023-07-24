'use strict'

const defaultTestableTagNames = [
  'Input',
  'Button',
  'Checkbox',
  'Radio',
  'Select',
  'Textarea',
  'Link',
]

const defaultTestableEventNames = [
  'click',
  'dblclick',
  'keydown',
  'keyup',
  'keypress',
  'mousedown',
  'mouseup',
  'mouseenter',
  'mouseleave',
  'mousemove',
  'mouseover',
  'mouseout',
  'submit',
  'touchstart',
  'touchend',
  'touchmove',
  'touchcancel',
  'focus',
  'blur',
  'change',
  'input',
]

const defaultDataTestIdAttribute = 'data-testid'

module.exports = {
  defaultDataTestIdAttribute,
  defaultTestableTagNames,
  defaultTestableEventNames,
}
