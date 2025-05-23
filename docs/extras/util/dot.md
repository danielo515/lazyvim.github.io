# Dot Files

<!-- plugins:start -->

:::info
You can enable the extra with the `:LazyExtras` command.
Plugins marked as optional will only be configured if they are installed.
:::

Below you can find a list of included plugins and their default settings.

:::caution
You don't need to copy the default settings to your config.
They are only shown here for reference.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  servers = {
    bashls = {},
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "neovim/nvim-lspconfig",
  opts = {
    servers = {
      bashls = {},
    },
  },
}
```

</TabItem>

</Tabs>

## [mason.nvim](https://github.com/mason-org/mason.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = { ensure_installed = { "shellcheck" } }
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "mason-org/mason.nvim",
  opts = { ensure_installed = { "shellcheck" } },
}
```

</TabItem>

</Tabs>

## [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)

 add some stuff to treesitter


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  local function add(lang)
    if type(opts.ensure_installed) == "table" then
      table.insert(opts.ensure_installed, lang)
    end
  end

  vim.filetype.add({
    extension = { rasi = "rasi", rofi = "rasi", wofi = "rasi" },
    filename = {
      ["vifmrc"] = "vim",
    },
    pattern = {
      [".*/waybar/config"] = "jsonc",
      [".*/mako/config"] = "dosini",
      [".*/kitty/.+%.conf"] = "kitty",
      [".*/hypr/.+%.conf"] = "hyprlang",
      ["%.env%.[%w_.-]+"] = "sh",
    },
  })
  vim.treesitter.language.register("bash", "kitty")

  add("git_config")

  if have("hypr") then
    add("hyprlang")
  end

  if have("fish") then
    add("fish")
  end

  if have("rofi") or have("wofi") then
    add("rasi")
  end
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-treesitter/nvim-treesitter",
  opts = function(_, opts)
    local function add(lang)
      if type(opts.ensure_installed) == "table" then
        table.insert(opts.ensure_installed, lang)
      end
    end

    vim.filetype.add({
      extension = { rasi = "rasi", rofi = "rasi", wofi = "rasi" },
      filename = {
        ["vifmrc"] = "vim",
      },
      pattern = {
        [".*/waybar/config"] = "jsonc",
        [".*/mako/config"] = "dosini",
        [".*/kitty/.+%.conf"] = "kitty",
        [".*/hypr/.+%.conf"] = "hyprlang",
        ["%.env%.[%w_.-]+"] = "sh",
      },
    })
    vim.treesitter.language.register("bash", "kitty")

    add("git_config")

    if have("hypr") then
      add("hyprlang")
    end

    if have("fish") then
      add("fish")
    end

    if have("rofi") or have("wofi") then
      add("rasi")
    end
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
