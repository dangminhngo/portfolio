export const calculateAge = (year, month, day) => {
  const dateOfBirth = new Date(year, month - 1, day)
  const current = new Date()

  const raw = current.getFullYear() - dateOfBirth.getFullYear()
  if (current.getMonth() > dateOfBirth.getMonth()) return raw
  if (dateOfBirth.getMonth() === current.getMonth() && current.getDay() >= dateOfBirth.getDay())
    return raw
  return raw - 1
}
