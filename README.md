# printed-amsterdam.com

This is the project for the [printed-amsterdam.com](https://printed-amsterdam.com) conference website build with ❤️ & [NuxtJS](https://github.com/nuxt/nuxt).

## Sponsoring

If you like this project and want to support us, we would be very happy to see you as a sponsor on GitHub ❤️<br>
You can find the `Sponsor` button on the top right of the [GitHub project page](https://github.com/toddeTV/printed-amsterdam.com).<br>
Thanks a lot for the support <3

## Production

Currenly no deployment.

<!-- TODO -->

## Development

### Info

This project uses `node` with `pnpm` as default package manager.

### Getting Started

1. Clone the repository.
2. Install dependencies:
   ```sh
   pnpm install --frozen-lockfile
   ```
3. No `.env` file is required for this project at the moment.
4. Happy coding! ❤️

### lint and prettier

This project uses [antfu/eslint-config](https://github.com/antfu/eslint-config) for eslint most of the files.
The following extend it:

- [antfu/eslint-plugin-format](https://github.com/antfu/eslint-plugin-format) for using external formatters like
  e.g. `prettier` for the file types that eslint cannot handle.
- [azat-io/eslint-plugin-perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist) for
  sorting object keys, imports, etc. - with auto-fix.

Keep in mind that the plugin names are renamed, see
[Plugins Rename](https://github.com/antfu/eslint-config?tab=readme-ov-file#plugins-renaming), e.g.:

```diff
-// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
+// eslint-disable-next-line ts/consistent-type-definitions
type foo = { bar: 2 }
```

[Why I don't use Prettier for every file type](https://antfu.me/posts/why-not-prettier)

### Design Guidelines

<!-- TODO -->

## Contributors

<a href="https://github.com/toddeTV/printed-amsterdam.com/graphs/contributors">
<img src="https://contrib.rocks/image?repo=toddeTV/printed-amsterdam.com" />
</a>

## License

This project is licensed under the MIT License. See the [LICENSE.md](./LICENSE.md) file for details.
