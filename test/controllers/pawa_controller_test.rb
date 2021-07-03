require 'test_helper'

class PawaControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get pawa_index_url
    assert_response :success
  end

  test "should get create" do
    get pawa_create_url
    assert_response :success
  end

end
