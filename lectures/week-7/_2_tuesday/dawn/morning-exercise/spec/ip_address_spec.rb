require 'spec_helper'
require_relative '../lib/ip_address'

describe "#valid_ip?" do
  it "returns true if input is between '0.0.0.0' and '255.255.255.255'" do
    expect(valid_ip?("127.0.0.1")).to be true
  end

  it "returns false if any number is greater than 255" do
    expect(valid_ip?("255.255.256.10")).to be false
  end

  it "returns false if any number is less than 0" do
    expect(valid_ip?("127.0.0.-2")).to be false
  end

  it "returns false if the input is not a string" do
    expect(valid_ip?(127)).to be false
  end

  it "returns false if there are less than 4 sets of numbers" do
    expect(valid_ip?("127.0.3")).to be false
  end

  it "returns false if there are more than 4 sets of numbers" do
    expect(valid_ip?("127.0.0.0.5")).to be false
  end

end