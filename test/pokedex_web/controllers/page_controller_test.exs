defmodule PokedexWeb.PageControllerTest do
  use PokedexWeb.ConnCase

  test "GET /", %{conn: conn} do
    conn = get(conn, "/")
    assert html_response(conn, 200) =~ "Seltsi jalkaennustus 2018"
  end
end
