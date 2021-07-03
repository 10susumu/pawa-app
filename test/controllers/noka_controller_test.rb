require 'test_helper'

class NokaControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get noka_index_url
    assert_response :success
  end

end
