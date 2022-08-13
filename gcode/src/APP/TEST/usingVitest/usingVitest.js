import { assert, expect, test } from 'vitest';

export default function usingVitest() {
  console.warn("🧪 TEST STARTED: VTEST USING 🏃‍♂️")
  // Edit an assertion and save to see HMR in action
  
  test('Math.sqrt()', () => {
    expect(Math.sqrt(4)).toBe(2)
    expect(Math.sqrt(144)).toBe(12)
    expect(Math.sqrt(2)).toBe(Math.SQRT2)
  })

  console.warn("🧪 TEST FINISHED: VTEST USING 🚩")
}