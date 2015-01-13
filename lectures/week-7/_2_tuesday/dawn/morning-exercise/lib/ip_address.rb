# ip address validator
def valid_ip?(address)
  address.is_a?(String)? validate_number_count(address) : false
end

# validates that there are exactly 4 numbers in the address
def validate_number_count(address)
  address_arr = address.split(".")
  address_arr.count == 4? validate_range(address_arr) : false
end

# validates that the number's value lies within a range
def validate_range(address_arr)
  address_arr.all? do |number|
    number.to_i <= 255 && number.to_i >= 0
  end
end
