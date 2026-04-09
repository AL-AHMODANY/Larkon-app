<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    :type="type"
  >
    <span v-if="$slots['icon-left']" class="btn-icon me-2">
      <slot name="icon-left" />
    </span>
    <span class="btn-label"><slot /></span>
    <span v-if="$slots['icon-right']" class="btn-icon ms-2">
      <slot name="icon-right" />
    </span>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => [
      'primary', 'secondary', 'success', 'info', 'warning', 'danger',
      'dark', 'light', 'link', 'purple', 'pink', 'orange'
    ].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  outline: {
    type: Boolean,
    default: false
  },
  soft: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: Boolean,
    default: false
  },
  width: {
    type: String,
    default: null,
    validator: (value) => [null, 'xs', 'sm', 'md', 'lg', 'xl'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'button'
  }
})

const buttonClasses = computed(() => {
  const classes = ['btn']

  // Size
  if (props.size === 'sm') classes.push('btn-sm')
  if (props.size === 'lg') classes.push('btn-lg')

  // Variant style (outline, soft, or default)
  if (props.outline) {
    classes.push(`btn-outline-${props.variant}`)
  } else if (props.soft) {
    classes.push(`btn-soft-${props.variant}`)
  } else {
    classes.push(`btn-${props.variant}`)
  }

  // Rounded (pill shape)
  if (props.rounded) {
    classes.push('rounded-pill')
  }

  // Width class (custom)
  if (props.width) {
    classes.push(`btn-width-${props.width}`)
  }

  return classes
})
</script>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}

.btn-icon {
  line-height: 0;
  display: inline-flex;
  align-items: center;
}

.btn-label {
  line-height: 1.2;
}
</style>