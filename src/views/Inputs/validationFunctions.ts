function validationUpToThousand(value: string) {
  if (value === "") {
    return false;
  } else if (!/^(([0-9]{1,3})?)$/.test(value)) {
    return true;
  } else {
    return false;
  }
}

function validationUpToHundred(value: string) {
  if (value === "") {
    return false;
  } else if (!/^(([0-9]{1,2})?)$/.test(value)) {
    return true;
  } else {
    return false;
  }
}

function validateInteger(value: string) {
  if (typeof value !== "string" || value === "") {
    return true;
  }

  if (!/^(([0-9]*)?)$/.test(value)) {
    return false;
  } else {
    return true;
  }
}

export { validationUpToThousand, validationUpToHundred, validateInteger };
