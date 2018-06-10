use Mix.Config


config :pokedex, PokedexWeb.Endpoint,
       load_from_system_env: true,
       url: [scheme: "https", host: "fast-spire-67955.herokuapp.com", port: 80],
       secret_key_base: Map.fetch!(System.get_env(), "SECRET_KEY_BASE")

config :pokedex, Pokedex.Repo,
       adapter: Ecto.Adapters.Postgres,
       url: System.get_env("DATABASE_URL"),
       pool_size: String.to_integer(System.get_env("POOL_SIZE") || "10"),
       ssl: true


config :logger, level: :info